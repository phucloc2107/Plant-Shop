import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import COLORS from '../../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({ navigation, route }) => {

    const plant = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()} style={styles.header_icon} />
                <Icon name='shopping-cart' size={28} style={styles.header_icon} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={plant.img} style={styles.image} />
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.details_title}>
                    <View style={styles.details_line}></View>
                    <Text style={styles.details_titleName}>Best Choice</Text>
                </View>

                <View style={styles.details_contain}>
                    <Text style={styles.details_plantName}>{plant.name}</Text>
                    <View style={styles.details_priceTag}>
                        <Text style={styles.details_priceTagName}>${plant.price}</Text>
                    </View>
                </View>

                <View style={styles.details_description}>
                    <Text style={styles.details_descriptionName}>About</Text>
                    <Text style={styles.details_descriptionInfo}>{plant.about}</Text>

                    <View style={styles.details_btn}>
                        <View style={styles.details_btnContainer}>
                            <View style={styles.details_borderBtn}>
                                <Text style={styles.details_borderBtnText}>-</Text>
                            </View>
                            <Text style={styles.details_btnNumber}>1</Text>
                            <View style={styles.details_borderBtn}>
                                <Text style={styles.details_borderBtnText}>+</Text>
                            </View>
                        </View>

                        <View style={styles.details_buyBtn}>
                            <Text style={styles.details_buyBtnText}>Buy</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_icon: {
        fontWeight: 'bold',
        color: COLORS.dark
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        flex: 1
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },
    details_title: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    details_line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    details_titleName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLORS.dark
    },
    details_contain: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    details_plantName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.dark
    },
    details_priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center'
    },
    details_priceTagName: {
        marginLeft: 15,
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    details_description: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    details_descriptionName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.dark
    },
    details_descriptionInfo: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 20
    },
    details_btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    details_borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: "center"
    },
    details_borderBtnText: {
        fontWeight: 'bold',
        fontSize: 28
    },
    details_btnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    details_btnNumber: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    details_buyBtn: {
        width: 150,
        height: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    details_buyBtnText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})