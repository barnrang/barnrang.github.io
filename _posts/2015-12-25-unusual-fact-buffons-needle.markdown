---
layout: post
title: 'UNUSUAL FACT: Buffon''s Needle'
date: 2015-12-25 22:17:31.000000000 +07:00
type: post
published: true
status: publish
categories:
- Math
tags:
- calculus
- math
author: barnrang
extra_excerpt: "รู้จักค่าพายหรือไม่ ลองมาหาวิธีการประมาณใหม่ได้ที่นี่!"
---
ในอดีตกาลได้มีคนกล่าวไว้ว่า

$$ \pi=\displaystyle\frac{D}{2r} $$

ซึ่งนักคณิตศาสตร์หลายๆคนทำการประมาณค่าพายให้ละเอียดมากเท่าที่จะทำได้ ตั้งแต่การใช้รูปหลายๆเหลี่ยม จนลำดับต่างๆนาๆเช่น

$$ \frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots $$

แต่วันนี้!!! เรามาเสนอวิธีใหม่ในการหาค่าพายที่สงสัยกันนักหนา เรื่องมีอยู่ว่า

เรามีโต๊ะที่ขีดเส้นตามแนวนอน(สมมติโต๊ะยาวอนันต์และขีดเส้นจำนวนมาก) และมีตะเกียบขนาดเดียวกันอยู่ล้านแท่ง โดยเส้นบนโต๊ะห่างกันเท่ากับความยาวของตะเกียบ ให้ $$ A $$ แทนจำนวนตะเกียบที่โยนแล้วทับเส้น $$ B $$ แทนจำนวนตะเกียบที่โยนไปทั้งหมด จงพิจารณาว่าค่าของ $$ \displaystyle\frac{2B}{A} $$ ควรจะเข้าใกล้ค่าใด (Hint: ต้องใช้แคลคูลัสนะจ๊ะ)


![](https://lh3.googleusercontent.com/P6P7glnUa8byn54uCtOz43U9oawq40UXuFdYwZMLRrSdmG5H2Wvnx1rW4b1uhS8jFreE3Tq_lHo4pzIKHVjwXZoXjJxKSutJr8Iaf9FOCz08HxOY7_MhYMQPn547lRUi42Z9aFpbybFGVbNalMFck1MQnPJCSS6SsmmG-13Yzyf4kUD06F_SJSGT2E30Yrq-T2P6ltSFX_MkfhzKmLVzJT3ArLFU3SbvQG3DmOhcR6VlzkSsOpXrrCd5Gq4_U-BTmBRME3BY6JT2gpnVg5AWdSIFBw3cEURA6hZTHJD6K2TbpRpwnusjsAnb-7vFB2_vKhACgBRNsUoO-FGy3-NHjFMDUqEcWwi_A_Vsq7g27-p_45iOXPlruFNUgiaTnNebPmlcFaNXe-iZNJ4c_TNF7tC1QvTgRgeuiLHgDcnsa8DUrmqSqH1d54TarWAo4PPO-t1z5WtpCOTldRkxBPFjJnQCqXC0p6Z4HAqyyjDZrnaorx5-AmPTzLHv98EhoHfHoEscNo6_JLfIIJPi1y2z4C9fivQtjMFicXh0YIptKWAWwNdsOseacgcuOAG6DwsyOMIG=w800-h600-no)
<!--more-->

Solution: หากพิจารณาที่จุด $$ O $$ ซึ่งเป็นจุดศูนย์กลางตะเกียบแท่งหนึ่ง\\
![](https://lh3.googleusercontent.com/qHliRp1RaLG2PSAMiTSkaoxk0QoYFw76gG_VguxMvuXUDxUJGL9cISN52DDF30Sj6DiLI2XQi9F5ZZCU18ckifNpJYbrCOQ8qPJj-kvwO8JEgaTkaT6OU0RbDq-ETBZDcbeXbm-syIGKroBUoeo_ck6a8n0KufJwDlShmvv8Ps1-ira0m0kvEycwJCTlp8o4LMJgCA380a8BocZN5A8ZI0LU_oG8Ui8TnS4GXYJKYhszY35DWyJgTQc4h1galgdXHjZROg29rYYL-_0pJKpzt17pm4BfQ42vu4brWGXy8NJt0_rA1MNbdZFa8RMZU6L0HF0h7TL31TcMAQKqYqNWXy23gnY38UG34vqHnr80kx_Tzm2veG0aSj1k9fEqizDxPRhL1Gn5luHXsVkQjGWztLPFQvLYaocibEahJqHe2v3-ehQVa_oLOgg9vcnsMZT4elfCGg3eGT7afU_jKSVLpPxwahH1vRdrEsnF52j52mbwMxEKXI3D6NhWDKa_P8L0NBVdkibsOTmAnsGH-E74JW4SE3h-BazoF4mD2rPAhULXyjj5RBn0Mv9gDfrh699ombsi=w431-h397-no)\\
หากลองพิจารณาดู จะพบว่าเงื่อนไขที่ทำให้ตะเกียบทาบเส้นคือการที่ $$ \displaystyle\frac{d\sin{\theta}}{2}\geq y $$

สังเกตเห็นได้ว่าที่ $$\theta$$ ที่ต่างกันจะมีช่วงของค่า $$ y $$ ที่แตกต่างกันออกไป หากเขียนให้ชัดเจนก็

$$ 0\leq y\leq \displaystyle\frac{d\sin{\theta}}{2} $$

ลองมาวาดกราฟกันตั้งแต่ $$ 0 $$ จนถึงช่วง $$ \pi $$ (สมมติ $$ d $$ เป็น 1 โดยไม่เสียนัยสำคัญ)\\
![](https://lh3.googleusercontent.com/TYYwB-kB_QCXVR5bR3XheAsf6kDyqjlUwtRIf9Zn1o0C5vREd59bmthvkZEje0fUw4s9lwvTt20ZuSFOfy70RWoC7GF8c8a6iXUwkfKk7OeA95YusEwlG2yj1U6q4P3avT_v_UFAMB5ghEHrYLg1r7YObe9VJVslbKsnnIJxCrDFQfNCaTid9NNlvYCXY63RS9TMWnx2T8Ht-G300Hdj-Nmhmvx_HiuUm0U9E8xVxGypOp6l1MOL6pQ1Kzq04Yo73G20S6pVwi9pMChC1QGcRVJlvWhoD1yIlpBSvq40DHaWdn1Y2gUfP1aib84jL58kPrIlJGycDqcz_kI5ZvMargzTNQj52rw15qD1WYwWOuV4LNtoSZlKxY7y306W0Pj26PwD5NAc13Zn6mH3dZzGUrNoP3BdGAK9oJsRR9qwSQaJ_OqdsnIDU0ARF0ZB2-u2-Iw5-1k_OqJZe4aP1sgtE6Dt56obnW-7Ci_jO9Gy5hmyb4c6F3GCpqyj2-CSXiF21fiKJPS37dcEZnlXStqP6fTzJzxWUBER8xO3ITNPdXgc9e9I4076SDhj-Eh4yBJkJwJd=w512-h414-no)

กรอบสี่เหลี่ยมผืนผ้านั้นจะเป็นส่วนของการเลือกจุดลงของตะเกียบแบบไร้เงื่อนไข (ว่าง่ายๆคือ Sample Space) และพื้นที่แรเงาจะเป็นส่วนของการเลือกจุดลงของตะเกียบโดยไปทับกับเส้นบนโต๊ะ จากสูตรความน่าจะเป็น

$$ P(E)=\displaystyle\frac{n(E)}{n(S)}=\displaystyle\frac{\displaystyle\int_{0}^{\pi}\frac{sin\theta}{2}}{\frac{\pi}{2}}=\displaystyle\frac{1}{\frac{\pi}{2}}=\displaystyle\frac{2}{\pi} $$

จากที่ได้กล่าวไว้ว่าจะทดลองโยนตะเกียบล้านแท่งซึ่งมีความหมายใกล้เคียงกับการโยนเป็นอนันต์ครั้งหรืออัตราส่วน $$ \frac{A}{B} $$ ก็จะเข้าใกล้ความน่าจะเป็นที่โยนแล้วไปทับเส้น เพราะฉะนั้น

$$ \displaystyle\frac{2B}{A}=\displaystyle\frac{2\pi}{2}=\pi $$

นี่จึงเป็นอีกวิธีหนึ่งที่สามารถประมาณค่า $$ \pi $$ ได้เช่นกัน!

credit: <http://mste.illinois.edu/activity/buffon/>
<!-- tomb -->
