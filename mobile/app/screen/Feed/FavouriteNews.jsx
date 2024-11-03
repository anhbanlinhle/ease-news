import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import SmallNews from "./SmallNews";
import Icons from "../../../constants/Icons";

const data = [
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
]

const FavouriteNews = () => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Có thể bạn sẽ thích</Text>
        <Icons.Pin style={styles.icon}/>
      </View>
    )
  }

  const renderSmallNews = () => {
    return (
      <FlatList
        style={styles.news}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{height: ratioW(8)}}/>}
        renderItem={({item}) => {
          return (
            <SmallNews
              cover={item.cover}
              title={item.title}
              author={item.author}
              timestamp={item.timestamp}
            />
          )
        }}
      />
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSmallNews()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ratioH(8),
    marginBottom: ratioH(8),
  },
  header: {
    width: ratioW(345),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: ratioH(24),
    fontWeight: '400',
    color: 'black'
  },
  news: {
    marginTop: ratioH(16)
  },
  icon: {
    marginLeft: ratioW(16),
    width: ratioW(16),
    height: ratioH(16),
  }
})

export default FavouriteNews
