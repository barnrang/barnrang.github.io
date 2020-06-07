---
layout: post
title:  "Install Python"
date:   2020-6-7
categories: lecture
author: barnrang
series: python-lecture
chapter: 2
---
# Install Python and Environment

สำหรับใน lecture 3 เราจะทำการสร้างเกมซึ่งจำเป็นต้องใช้คอมพิวเตอร์ของตัวเองในการรันโปรแกรม ดังนั้นก่อนที่จะเริ่มคาบก็อยากให้ทุกคนทำการติดตั้ง **python 3.6 หรือใหม่กว่านั้นลงเครื่อง** เพื่อความสะดวก เราจะให้ทุกคนติดตั้ง miniconda ซึ่งเป็น python ที่มาด้วย library เพื่อการทำวิเคราะห์ข้อมูลทางวิทยาศาสตร์หรือคณิตศาสตร์มากมายรวมไว้ด้วยกัน หากเคยติดตั้ง python แล้วหรือรู้วิธีการก็ให้ข้ามไปติดตั้ง pygame ได้เลย

- [ติดตั้ง Python ลง Windows](#python-window)
- [ติดตั้ง Python ลง Mac](#python-mac)
- [ติดตั้ง library pygame](#pygame)

สำหรับ program ที่ใช้ในการเขียนโค้ดก็สามารถเลือกใช้ได้ตามใจชอบ แต่หากยังไม่มีอันที่ชอบก็อยากให้ลองโหลด pycharm มาใช้กันดูครับ

- [ติดตั้ง editor pycharm](#pycharm-install)

## <a name="python-window"></a>ติดตั้ง Python ลง Windows
1. ก่อนอื่นเลยก็เข้า<a href="https://docs.conda.io/en/latest/miniconda.html" target="blank"> https://docs.conda.io/en/latest/miniconda.html </a> เพื่อไปติดตั้ง miniconda ให้เลือก version 3.6 ขึ้นไป เวอร์ชั่น 64 bit (ส่วนใหญ่สมัยนี้ก็คอม 64 bit กันแล้ว หากไม่มั่นใจให้ right click ที่ This PC -> Properties แล้วเช็คตรงช่อง System type)

2. โหลดเสร็จกดติ้ดตั้งตามปกติได้เลย ให้ติดตั้งแบบ all users (หรือเอาจริงๆ ยังไงก็ได้) ตำแหน่งที่ลงก็ตรงไหนก็ได้ แนะนำให้ลงใน `C:/`
**หากถึงขั้นตอนที่อยู่ในรูปข้างล่างนี้ ให้ติ๊กช่องทั้งสอง**
![AnacondaInstall]({{"/assets/images/anaconda_install.jpg" | absolute_url}})

3. เปิด command prompt (search ช่องล่างซ้ายว่า cmd) แล้วลองพิมพ์ `python` แล้วกด enter มันจะขึ้นหน้าต่างต่อไปนี้ ให้พิมพ์ `exit()` กด enter เพื่อให้กลับมาที่เดิม

4. ลองรัน `conda list` ต่อเพื่อเช็คว่า miniconda ของเราทำงานตามที่คิดไว้หรือไม่

![cmdlinepython]({{"/assets/images/cmd_line_python.jpg" | absolute_url}})


## <a name="python-mac"></a>ติดตั้ง Python ลง Mac
1. ก่อนอื่นเลยก็เข้า<a href="https://docs.conda.io/en/latest/miniconda.html" target="blank"> https://docs.conda.io/en/latest/miniconda.html </a> เพื่อไปติดตั้ง miniconda ให้เลือก version 3.6 ขึ้นไปที่เขียนว่า `64-bit pkg`

2. double click ที่ไฟล์ที่โหลดมา ติดตั้งตามขั้นตอนได้เลย
หากเจอ pycharmIDE ก็ขอแนะนำให้ลงด้วย ค่อนข้างดี

3. เปิด terminal แล้วลองรัน `which conda` ค่าที่โชว์ควรจะเป็นตำแหน่งของไฟล์
```
$>which conda
(ตัวอย่าง) /Users/barnrang/miniconda3/bin/conda
```
หากไม่สำเร็จก็จะตอบกลับมาอย่างนี้
```
$>which conda
conda not found
```

4. หากขั้นตอนที่ 3 รันสำเร็จ ให้ดำเนินการต่อโดยการรันคำสั่งต่อไปนี้ทีละบรรทัด (เผื่อเกิด error)
```
$>dirname `which conda` | awk '{print "export PATH=\""$1":$PATH\""}' >> ~/.zshrc
$>source ~/.zshrc
```

5. ลองรัน `python` ควรจะขึ้นหน้าต่างเช่นนี้ ตรงที่ขีดเส้นใต้ควรมีคำว่า `Anaconda` ขึ้นมา
![cmdlinepython0max]({{"/assets/images/python-terminal-mac.jpg" | absolute_url}})

6. กด `Ctrl+d` เพื่อออกจาก python

## <a name="pygame"></a>ติดตั้ง library pygame
### สำหรับ window 
เปิด command prompt แล้วรัน `pip install pygame`

### สำหรับ mac
เปิด terminal แล้วรัน `pip install pygame`

## <a name="try"></a>ลองรันโปรแกรม


## <a name="pycharm-install"></a>ติดตั้ง pycharm 