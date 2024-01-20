import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, IMAGE, THEME} from '../../Common';
import {BtnIconApp, FavoriteApp, HeadingApp} from '../../Component';
import {openLink} from '../../util';

type PropsType = {
  data: imgObjType;
};

const MainDetails = ({data}: PropsType) => {
  const slug = data.slug.split('-').slice(0, 2);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: data.images.original.url}} style={styles.img} />
      </View>
      {/* name & fav */}
      <View style={styles.firstRow}>
        <HeadingApp numberOfLines={3} strong_16>
          {data.title}
        </HeadingApp>
        <FavoriteApp item={data} />
      </View>

      {/* slug */}
      <View style={styles.slugBox}>
        {slug.map((item, index) => (
          <View key={index} style={styles.box}>
            <HeadingApp key={index} normal_13 style={styles.slugTxt}>
              {item}
            </HeadingApp>
            {index !== slug.length - 1 && <View style={styles.dot} />}
          </View>
        ))}
      </View>

      {/* Links */}

      <View>
        <BtnIconApp
          width={20}
          height={20}
          onPress={() => openLink(data.embed_url)}
          source={IMAGE.icons.website}
          title="Website"
        />
      </View>
    </View>
  );
};

export default MainDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SIZES.subHorizontal,
    gap: THEME.SIZES.subVertical / 2,
  },
  img: {
    width: DEVICE.width - THEME.SIZES.subHorizontal,
    height: DEVICE.width - THEME.SIZES.subHorizontal,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slugBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.secoundry,
    borderRadius: 5,
    marginHorizontal: THEME.SIZES.subHorizontal,
  },
  slugTxt: {
    color: COLORS.primary,
  },
});
