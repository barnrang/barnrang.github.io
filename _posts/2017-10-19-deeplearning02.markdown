---
layout: post
title:  "Deep Learning CS231 Training outline & vectorization"
date:   2017-10-19
categories: CS231
author: barnrang
series: cs231
chapter: 2
---
สำหรับบทที่แล้วเราก็ได้เข้าใจวิธีการใช้ k-NN classifier กันไปแล้ว แต่บางคนอาจยังไม่รู้เทคนิคต่างๆที่ต้องใช้ในการ training model ของเราซึ่ง ณ ที่นี้จะพูดถึงเทคนิคที่สำคัญถึง 2 สิ่งด้วยกันคือการ vectorization กับ validation


### Vectorization
สรุปสั้นคือการทำให้ทุกอย่างอยู่ในรูป vector กับ matrix

สมมุติ $$A$$ กับ $$B$$ เป็นเว็กเตอร์ 5 มิติ
{% highlight python %}
import numpy as np
A = np.array([1,2,3,4,5])
B = np.array([6,7,8,9,10])
{% endhighlight %}

เราต้องการหาค่าของ $$A+B$$ หากจะเขียนแบบพื้นฐานเลยก็ต้องใช้ for loop
{% highlight python %}
C = np.zeros(5)
for i in range(len(A)):
  C[i] = A[i] + B[i]
{% endhighlight %}
ซึ่งถ้าเขียนแบบ vectorize ก็บวกกันในรูปเวกเตอร์ได้เลย (library numpy รองรับ linear operation แทบทุกตัว)
{% highlight python %}
C = A + B
{% endhighlight %}
จากตัวอย่างที่ผ่านมาก็อาจไม่เข้าใจว่ามันทำงานเร็วขึ้นอย่างไร เพราะถ้าเราทำเองต่อให้เขียนยังไงก็ใช้แรงเท่ากันไม่ใช่หรือ ซึ่งก็ไม่ผิดนักแต่อย่าลืมว่าคอมไม่ได้มีสมองเดียว เราสามารถแบ่งงานจำนวนหนึ่งไปให้ processor อื่นทำงาน จากตัวอย่างที่ผ่านมา สมมุติเราแบ่งงานออกเป็น 3 ชิ้นจะเป็นอย่างไรกันหล่ะ ให้ core1 บวก 1/3 มิติแรก core2 บวก 1/3 มิติกลาง ส่วนที่เหลือ
ก็ให้ core3 ทำไป เวลาที่ใช้ก็เหลือเพียง 1/3 เท่านั้น! สรุปคอนเซปส์สั้นๆคือ "แบ่งงานทำพร้อมๆกัน" หรือภาษาทางการก็ parallel processing
{% highlight python %}
#ฟังก์ชันจับเวลา
def time_function(f, args):
  import time
  tic = time.time()
  f(args)
  toc = time.time()
  return toc - tic
{% endhighlight %}
บวกเว็กเตอร์แบบไม่ vectorize
{% highlight python %}
def loop(A):
  B = np.zeros_like(A)
  for i in range(len(A)):
    B[i] = A[i] + A[i]
{% endhighlight %}
บวกแบบ vectorize
{% highlight python %}
def vec(A):
  B = np.zeros_like(A)
  B = A + A
  return A
{% endhighlight %}
ต่อไปก็ลองจับเวลาของทั้งสองรูปแบบ
{% highlight python %}
x = np.ones(100000)
time1 = time_function(vec, x)
time2 = time_function(loop, x)
print(time1,time2)
{% endhighlight %}
{% highlight python %}
0.031382083892822266 0.09359598159790039
{% endhighlight %}
เห็นได้ชัดว่า vectorization ลดเวลาทำงานลงได้อย่างมีนัยยะ แนะนำให้ลองไปทดสอบกับผลคูณ matrix
ซึ่งจะใช้เยอะในบทถัดๆ ไป
### Validation
ต่อไปเราจะทำการประเมิน model ว่ามีความแม่นยำเท่าไหร่กันเชียว เราอาจคิดว่าใช้ตัว test data ก็ได้สิ แต่ความเป็นจริงนั้น test data ไม่ใช่ข้อมูลที่ถูกเปิดเผยและต่อให้เปิดเผยก็ไม่ควรจะไปแตะข้อมูลเหล่านั้น โดยเฉพาะการยำข้อมูล test data มา training เป็นเรื่องต้องห้าม (เพราะอาจทำให้ model เราชินกับ test data และประเมินสูงเกินไป) อย่างไรก็ตาม เราก็ต้องทำการทดสอบ model ของเราก่อนไป “เข้าห้องสอบ” วิธีที่เราจะใช้คือการแบ่งข้อมูลบางส่วนให้เป็น validating data อาจเอา 1000 ตัวมาเป็น val data
แต่ถ้ามีจำนวนชุดข้อมูลน้อยก็ให้ 1/5 ของข้อมูลมาเป็น validation data แล้วก็ train บน 4/5 ของข้อมูลที่เหลือ (อัตราส่วนปรับตามใจชอบ)ก็ได้ ซึ่งการแบ่งข้อมูลดังกล่าวเรียกว่า __k-folds cross-validation__
![k-fold](http://cs231n.github.io/assets/crossval.jpeg)

*ตัวอย่าง 5-folds cross-validation*

ที่นี้ก็บสามารถทดสอบข้อมูลได้อย่างหายห่วง ที่สำคัญที่สุดคือความแม่นยำของ val data สามารถบอกถึงปัญหาที่เกิดขึ้นในการ training ของเราได้เช่น ถ้าเกิดความแม่นยำของ training data แม่นยำมากแต่ validatind data กลับทำไม่ค่อยดีมากนัก เราก็ตั้งสมมุติฐาน
ได้เลยว่า model ของเราเกิดการ __overfitting__
![overfitting]({{"/assets/images/overfitting.png" | absolute_url}})

*เส้นสีฟ้ามีความแม่นยำในการทำนาย training data ไม่มีความแม่นยำในการใช้จริง*

คำถาม:
~~~~
ความแม่นยำของ NN classifier เป็นเท่าไหร่เมื่อใช้ training data มาทดสอบ
~~~~

คำถาม2:
~~~~
แล้วถ้าเป็น k-NN classifier ล่ะ?
~~~~
