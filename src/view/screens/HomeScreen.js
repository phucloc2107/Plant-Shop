import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import COLORS from '../../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../../consts/plants';

const width = Dimensions.get('screen').width / 2 - 30

const HomeScreen = ({ navigation }) => {

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const [categoryIndex, setCategoryIndex] = React.useState(0);

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}  >
                        <Text
                            style={[styles.categoryText, categoryIndex == index && styles.categorySelected
                            ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    const Card = ({ plants }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', plants)}>
                <View style={styles.card}>
                    <View style={styles.card_heartIcon}>
                        <View style={[styles.card_heartIconBorder, { backgroundColor: plants.like ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)' }]}>
                            <Icon name='favorite' size={18} color={plants.like ? COLORS.red : COLORS.dark} />
                        </View>
                    </View>

                    <View style={styles.card_imgContainer}>
                        <Image style={styles.card_img} source={plants.img} />
                    </View>

                    <Text style={styles.card_namePlant}>{plants.name}</Text>
                    <View style={styles.card_price}>
                        <Text style={styles.card_textPrice}>${plants.price}</Text>
                        <View style={styles.card_addContainer}>
                            <Icon name='add' size={20} style={styles.card_addText} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.header_greeting}>Welcome to</Text>
                    <Text style={styles.header_name}>Plant Shop</Text>
                </View>
                <Icon name="shopping-cart" size={28} />
            </View>

            <View style={styles.search}>
                <View style={styles.search_container}>
                    <Icon name='search' size={25} style={styles.search_icon} />
                    <TextInput placeholder='Search' style={styles.search_input} />
                </View>
                <View style={styles.search_sortBtn} >
                    <Icon name='sort' size={30} color={COLORS.white} />
                </View>
            </View>

            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50
                }}
                numColumns={2}
                data={plants}
                renderItem={({ item }) => <Card plants={item} />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_greeting: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    header_name: {
        fontSize: 35,
        fontWeight: 'bold',
        color: COLORS.green
    },
    search: {
        marginTop: 30,
        flexDirection: 'row'
    },
    search_container: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_icon: {
        marginLeft: 20
    },
    search_input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        flex: 1
    },
    search_sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    categoryText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categorySelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    card_heartIcon: {
        alignItems: 'flex-end'
    },
    card_heartIconBorder: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_imgContainer: {
        height: 100,
        alignItems: 'center'
    },
    card_img: {
        flex: 1,
        resizeMode: 'contain'
    },
    card_namePlant: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
        color: COLORS.dark
    },
    card_price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    card_textPrice: {
        fontWeight: 'bold',
        fontSize: 19,
        color: COLORS.dark
    },
    card_addContainer: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_addText: {
        color: COLORS.white,
        fontWeight: 'bold'
    }
})