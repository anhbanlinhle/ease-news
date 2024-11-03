import React from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import {ScrollView} from "react-native-gesture-handler";
import {ratioH} from "../../../utils/converter";
import Header from "./Header";
import Section from "./Section";

const data1 = [
  {
    cover: "https://s3-alpha-sig.figma.com/img/69c6/1abd/c00223e6f2740ac799449e0895416c82?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrUU4KbpasU2n2fEONjsN4UApOweau4I6qwe~Z2c10BSdDpUO3KFbX48gBNRdm4r0HbvUSOuAB95aQWX3Usi21yQzuW3OsZxEOAUuGqHl3IVpu0oC92deWj2bd5g4VeCp3H98JYZhZSKlFWr38Cj~6fICkJDToTvIG8dNDdYQVS8-cLfXILuZuSW~JGP0MIPtGkG8~IC3DtIpXQ7PFsv0Tv~0qP6iQdfxnrsTN5PXIx0Yqmx~IQesF6BGL8r2Y2O8wgAE4f--9nB2Rbj1~RMqJRIzUFLSk94g4qzgUcy91hqW0VypJs7a48tylTVeVErsd5Wxp60-1gF3kN0EgFU8A__",
    title: `5 things to know about the 'conundrum' of lupus`,
    author: `Matt Villano`,
    timestamp: `Sunday, 9 May 2021`
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/7fcf/e2ab/db2c76b6b9d1cef9a83e37fce052776f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFzGysDHMl5slASN0R1PlqJqCP5Tx2-2bxk-QmwRcxYkeb0zNEczTXpMEAFsEKeInBhgMa3keP~snOlBBk3PSJAb6a6DXQEBKXBz14AXMKIOGiqprhZ3qOM7XafuXGLFyFKovGLyrzjkOCSWAzI8Sv6leCQ1NrcUirTi5knPHVTrxCj64UuNIkSbuFuENMLrPUpWQ~sZ07-rEWigytqCwH1vTYNNGspm59gb8gYwDbdpUxGrnfOvW-3EL7SqVzJRdVu-A7dl0afeHJz-f3xKVNFmgy~N2GS3kwxdILgEwNERA-ARfz094fs3yQwZrDvwLx8-4HE4Hbdjc3yBewwdqQ__",
    title: `4 ways families can ease anxiety together`,
    author: `Zain Korsgaard`,
    timestamp: `Sunday, 9 May 2021`
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/1279/679f/20420e71f53008269e726db07501f440?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xqhu-Jc5d6igSq1wNFA5xD52aKWyEGNx1CyKEWJOAJvd9~yxm6bzyYOV541SVOa10vBvxcZH6jo48cZdgnSKfjESVgtEGfYXocXpZ6Mpfh7par1I2gotxaB4sFhW0nW1rFthGd8sVTb~8aiuy0FZblBrv12aWsh~wKn4BLTfNTWAtBgDLTjrAy28dLa6nm4yHRGRLVYzW7OIRu1kIlJDz88Q-32DvkPWI-bUnKzONJRWJs1mR6xOo4KyoJsy3TxAnaeXlr6YmwSO1jy-GlmX~wzvcH8usL1N0Pa5xtJxui-se6uhvFXYMSwIMal3mBM3SD7~39fKG9pb2Yg2ltmM4A__",
    title: `What to do if you're planning or attending a wedding during the pandemic`,
    author: `Kristen Rogers`,
    timestamp: `Sunday, 9 May 2021`
  }
]

const data2 = [
  {
    cover: "https://s3-alpha-sig.figma.com/img/1279/679f/20420e71f53008269e726db07501f440?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xqhu-Jc5d6igSq1wNFA5xD52aKWyEGNx1CyKEWJOAJvd9~yxm6bzyYOV541SVOa10vBvxcZH6jo48cZdgnSKfjESVgtEGfYXocXpZ6Mpfh7par1I2gotxaB4sFhW0nW1rFthGd8sVTb~8aiuy0FZblBrv12aWsh~wKn4BLTfNTWAtBgDLTjrAy28dLa6nm4yHRGRLVYzW7OIRu1kIlJDz88Q-32DvkPWI-bUnKzONJRWJs1mR6xOo4KyoJsy3TxAnaeXlr6YmwSO1jy-GlmX~wzvcH8usL1N0Pa5xtJxui-se6uhvFXYMSwIMal3mBM3SD7~39fKG9pb2Yg2ltmM4A__",
    title: `What to do if you're planning or attending a wedding during the pandemic`,
    author: `Kristen Rogers`,
    timestamp: `Sunday, 9 May 2021`
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/6392/3be7/50ea60e76eed0aad66e17b4cdcc27247?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBeLqXPE16XSRwq5BvhZV-4LurRjPgRtG~Lm7c-Rv9ai1QvDa41g2M2N6soA67lFVdidwKg~qRxBb9AQK~qMEYdcP8IKr0SII44a7B5mjd6qhUTRjhWk8INQ-CU8I9gCBLSPwsTSQP97ZGIf1kD1B9WBUHULSNbsa4ydJFdmkt7It84fUhv35bQvRuv-yHzRdW7iPkAbrL6OiPZU4XzQv87ybMF~c9axO6BrL3h8RP3smgueedPg5ji9MtzCOEOJH7DKjfIGCHSI2c1d-hlSP9D3YLlTY-gIm3b-l7OrwMaNwCSyO8xUQIvIxVIFY2ATcnnhJHRGzCG625kROfpl7Q__",
    title: `Doctors on digital front lines help fight India’s Covid surge`,
    author: `Shepard Smith`,
    timestamp: `Sunday, 9 May 2021`
  },
  {
    cover: "https://s3-alpha-sig.figma.com/img/69c6/1abd/c00223e6f2740ac799449e0895416c82?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrUU4KbpasU2n2fEONjsN4UApOweau4I6qwe~Z2c10BSdDpUO3KFbX48gBNRdm4r0HbvUSOuAB95aQWX3Usi21yQzuW3OsZxEOAUuGqHl3IVpu0oC92deWj2bd5g4VeCp3H98JYZhZSKlFWr38Cj~6fICkJDToTvIG8dNDdYQVS8-cLfXILuZuSW~JGP0MIPtGkG8~IC3DtIpXQ7PFsv0Tv~0qP6iQdfxnrsTN5PXIx0Yqmx~IQesF6BGL8r2Y2O8wgAE4f--9nB2Rbj1~RMqJRIzUFLSk94g4qzgUcy91hqW0VypJs7a48tylTVeVErsd5Wxp60-1gF3kN0EgFU8A__",
    title: `5 things to know about the 'conundrum' of lupus`,
    author: `Matt Villano`,
    timestamp: `Sunday, 9 May 2021`
  },
]

const TrendingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header/>
        <Section title={'ĐANG ĐƯỢC QUAN TÂM'} data={data1}/>
        <Section title={'NÓNG 24H'} data={data2}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: ratioH(96),
  }
})

export default TrendingScreen
