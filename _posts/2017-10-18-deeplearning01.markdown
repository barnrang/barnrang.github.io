---
layout: post
title:  "Deep Learning CS231 kNN-classifier"
date:   2017-10-18
categories: CS231
author: barnrang
series: cs231
chapter: 1
---

นี่ก็เป็นโพสต์ที่ทำออกมาเพื่อทบทวนสิ่งที่เคยทำมาในคอร์สออนไลน์ CS231 Convolutional Neural Networks for Visual Recognition และหวังว่าจะมีประโยชน์กับผู้ที่เดินผ่านทางมาหรือสนใจในเรื่อง machine learning
หากสนใจเกี่ยวกับด้าน image recognition หรือพวก neural networking ก็ขอแนะนำให้ไปลองเรียนดู
ครับ ทุกวิดีโอเปิดชมฟรีและมีการบ้านให้ด้วย

เนื่องจากสื่อทุกอย่างเป็นภาษาอังกฤษก็อาจยากต่อการเข้าใจก็หวังว่าบล๊อกนี้จะมีประโยชน์บุคคลเหล่านั้น

Ref: <a href="http://cs231n.stanford.edu/" target="blank"> http://cs231n.stanford.edu/ </a>
<!--more-->

### เช็คความพร้อม
ก่อนอื่นเลยก็มาลองสำรวจตัวเองก่อนว่ามีความพร้อมที่จะลุยคอร์สนี้หรือไม่ บอกล่วงหน้าเลยว่าต้องมี
พื้นฐานคณิตศาสตร์ในระดับนึงซึ่งจะบอกกล่าวกันในส่วนต่อไป
1. Calculus ระดับมหาลัย (I,II) : partial differential, chain rule, Jacobian Matrix etc.
Calculus มปลายก็ไปรอดแต่ต้องหาอ่านเพิ่มเติมนิดหน่อย
2. Linear Algebra ระดับมหาลัย (I,II) : basic operation (sum, product, multiplication), SVD
ถ้ามีความเคยชินกับการใช้ matrix และ vector (มิติใดๆ) ถือว่าโอเค
3. ความเคยชินกับการเขียนภาษาโปรแกรมมิ่ง เช่น python, C, C++

หากขาดข้อใดการค่อยๆเก็บไประหว่างทางก็เป็นไปได้ แต่บอกล่วงหน้าว่าถ้าข้อ 1 กับ 2 ไม่แข็งแกร่งพอก็อาจยากอยู่หน่อยนึง
(พยายามก็ไหวแหละ)

### เป้าหมาย
เริ่มแรกเรามาดูเป้าหมายของคอร์สเรียนกัน

ชุดข้อมูลที่เราจะใช้เรียกว่า CIFAR-10 หรือข้อมูลรูปภาพของวัตถุ 10 ชนิด(class)มี หมา แมว เครื่องบิน เป็นต้น
ซึ่งก็สามารถโหลดมาใช้ได้จาก [CIFAR-10 data](http://www.cs.toronto.edu/~kriz/cifar.html)

![CIFAR-10](http://cs231n.github.io/assets/nn.jpg)
ข้อมูลจะเป็นรูปภาพขนาด 32 x 32 และเป็นภาพสีที่มีองค์ประกอบ RGB หรือถ้าเขียนมิติใหม่ก็ 32 x 32 x 3

### Nearest Neighbor Classifier
สมมุติว่ามีจุด $$A(0,0),B(3,0),C(2,2)$$ อยู่บนระนาบ เราจะพิจารณายังไงว่าระหว่าง $$B$$ กับ $$C$$ อันไหนอยู่
ใกล้ $$A$$ มากกว่ากัน? ถ้าตามที่เคยเรียนมาก็ใช้สูตรระยะทาง

$$ d(A,B)=|\vec{A}-\vec{B}| = |(-3,0)| $$

ซึ่งความเป็นจริงแล้วระยะทาง (distance) มันไม่ได้นิยามแค่แบบเดียวเท่านั้น แต่กลับมีถึงสองแบบใหญ่ๆ
ที่นิยมใช้กัน อันดับแรกคือ "L1 distance"

$$ |(a,b)| = |a| + |b| \\
 d(A,B) = |-3| + |0| = 3 \\
 d(A,C) = |-2| + |-2| = 4 $$

หรือสรุปได้ว่า $$B$$ อยู่ใกล้ $$A$$ มากกว่า $$C$$ สำหรับ L1 distance

ต่อไปก็เป็นระยะทางที่เราคุ้นเคยกันดีหรือ L2 distance

$$ |(a,b)| = \sqrt{a^2 + b^2} \\
d(A,B) = \sqrt{(-3)^2 + 0^2}=3 \\
d(A,C) = \sqrt{(-2)^2 + (-2)^2}=2\sqrt{2}<2.9 $$

หรือสรุปได้ว่า $$C$$ อยู่ใกล้ $$A$$ มากกว่า $$B$$ สำหรับ L2 distance

ด้วยตรรกะเดียวกัน สมมุติเรามีรูปสองรูประหว่างกบกับกระต่าย เราอยากลองเอาอีกรูปมาเทียบว่าเหมือนกับกบมากกว่า
หรือกระต่ายมากกว่ากันแน่ เราควรจะทำไง? คำตอบคือเทียบระยะห่าง

ต่อไปเราก็จะทำการ "คลี่" รูปภาพของเราให้กลายเป็น vector 32 x 32 x 3 = 3072 มิติ จากนั้นก็ทำการเทียบระยะห่าง
กับรูปกบและกระต่ายทั้งคู่แล้วดูว่าอันไหนใกล้กว่ากัน
{% highlight python %}
dim = 32 * 32 * 3
frog, rabbit, test = data #32*32*3 Images
f,r,t = frog.reshape(dim), rabbit.reshape(dim), test.reshape(dim)
if dist(f,t) < dist(r,t):
  print("It looks like frog")
else:
  print("It looks like rabbit")
{% endhighlight %}

### ลงมือเขียน
เวลาปฏิบัติจริงก็รับข้อมูลเยอะๆ มาเก็บไว้เป็นบัญชี จากนั้นพอถึงเวลาทดสอบก็จับมาหาระยะทางทั้งหมด
แล้วจึงเอาตามตัวที่อยู่ "ใกล้ที่สุด" โค้ดต่อไปนี้จะอ้างอิงตาม assignment ที่เขาให้มาซึ่งอยู่ใน class KNearestNeighbor

{% highlight python %}
def train(self, X, y): #เก็บ training data เอาไว้ใช้ในตอน test
    self.X_train = X
    self.y_train = y
{% endhighlight %}

{% highlight python %}
def compute_distances_two_loops(self, X):
  """
  Compute the distance between each test point in X and each training point
  in self.X_train using a nested loop over both the training data and the
  test data.

  Inputs:
  - X: A numpy array of shape (num_test, D) containing test data.

  Returns:
  - dists: A numpy array of shape (num_test, num_train) where dists[i, j]
    is the Euclidean distance between the ith test point and the jth training
    point.
  """
  num_test = X.shape[0]
  num_train = self.X_train.shape[0]
  dists = np.zeros((num_test, num_train))
  #วนสองรอบตามจำนวน training sample กับ test sample
  for i in xrange(num_test):
    for j in xrange(num_train):
      temp = X[i] - self.X_train[j] #ผลต่างระหว่างเว็กเตอร์
      dists[i][j] = temp.dot(temp.T) #L2 distance
  return dists
{% endhighlight %}

{% highlight python %}
def predict(self, X):
  dists = compute_distances_two_loops(X)
  num_test = dists.shape[0]
  y_pred = np.zeros(num_test)
  closest_y = dists.argmax(axis=1) #หาตำแหน่ง(index)ตัวที่ระยะทางน้อยสุด
  y_pred = self.y_train[closest_y] #เรียกผลที่ทำนายของทุกๆตัวทดสอบโดยใช้ตำแน่งที่ได้รับมา
  return y_pred
{% endhighlight %}
### kNN-classifer
เพียงเท่านี้ก็เป็นอันจบ NN-classifier หรือการแยกประเภทโดยพิจารณาจุดที่ “ระยะทาง” ที่ใกล้ที่สุด

แต่อย่างไรก็ตาม การแยกแย่างนี้ก่อให้เกิดปัญหาได้เช่นกัน ถ้าสมมุติเกิดตัวทดสอบของคุณล้อมรอบไปด้วย class “กระต่าย” แต่ดันมีจุดๆนึงของ class “กบ” เข้ามาประกบใกล้ เราควรจะประเมินว่ามันเป็นกบจริงๆ หรือ? นี่คือความผิดพลาดที่เกิดขึ้นและเป็นเหตุทำให้ล้มเหลวในการประเมินกลุ่มทดสอบทั่วไป (Fail to generalize) หรือบางทีเรียกกันว่า overfitting

งั้นลองเปลี่ยนมุมมอง เวลาเล่นเทนนิสก็ต้องตัดสินกันภายใน 5 เซตว่าใครชนะมากกว่ากัน เพราะการแข่งแค่รอบเดียว
ประเมินอะไรไม่ได้ใช่ไหมล่ะ

ทีนี้มองย้อนกลับมาที่ NN-classifier ถ้าเราเลือกมาหลายๆจุด(สมมุติ k จุด)ที่อยู่ใกล้ที่สุดแล้วดูว่า class ไหนมีเยอะสุด
แล้วจึงประเมินให้เป็น class นั้นจะดีกว่ารึเปล่า ซึ่งน่าจะตอบไม่ยากว่า "แน่นอน"

ดังนั้นแล้วการใช้ NN-classifier ที่เลือกมา k จุดนั้นเรียกว่า __kNN-classifer__
สมมุติเราใช้ 5-NN Classifier แล้ว class ของ 5 จุดแรกที่ใกล้ที่สุดคือ [หมา,หมา,ไก่,แมว,หมู] เราก็จะประเมิณว่า "หมา"
![kNN-classifier](http://cs231n.github.io/assets/knn.jpeg)
*สีในแต่ละจุดของพื้นที่หมายถึงว่าจุดนั้นๆถูกประเมินเป็น class ใด สังเกตได้ว่า NN classifier มีข้อบกพร่องในการแยก class อย่างชัดเจน*

อย่างไรก็ดี kNN-classifier กลับไม่ใช่ตัวเลือกที่ดีนักในการใช้แนกประเภทรูปภาพ เพราะมันมีความอ่อนไหวต่อการเปลี่ยนแปลงรูปภาพแม้เพียงเล็กน้อยเช่นการขยับซ้าย, ขวาไปหนึ่งหรือสองก็อาจทำให้
distance ของเราวิบัติได้ ความแม่นยำที่ได้ออกมาอยู่ที่ประมาณ 35-36% ซึ่งก็ดีกว่าเดามั่วแต่ก็ไม่ได้ดีมากนักเพราะหลังจากนี้จะมี model อื่นๆอีกมากมายที่เหมาะสมกว่า มีหลักการและ __ยากกว่า__

ในเมื่อถึงจุดๆ ก็น่าจะเพียงพอที่จะทำ Assignment1 kNN-classifier ได้แล้ว ที่เหลือก็คือวิธีการประเมิน
 model หรือ classifier ที่เราได้ฝึกซ้อมไว้และอีกเทคนิคที่สำคัญคือการ vectorize ซึ่งจะกล่าวในบทหน้า

*ขอขอบคุณ CS231 Convolutional Neural Networks for Visual Recognition สำหรับข้อมูลและรูปภาพ*
