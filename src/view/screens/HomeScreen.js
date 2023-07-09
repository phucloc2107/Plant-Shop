import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import COLORS from '../../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const [categoryIndex, setCategoryIndex] = React.useState(0);

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <Text
                        key={index}
                        style={[styles.categoryText, categoryIndex == index && styles.categorySelected
                        ]}>
                        {item}
                    </Text>
                ))}
            </View>
        )
    }

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
    }
})