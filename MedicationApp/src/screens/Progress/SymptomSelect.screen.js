import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput, List, Divider, Card } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { basics, commonStyles } from '../../assets/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ListItem } from 'react-native-elements'


const SymptomSelect = ({ navigation, title }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const commonList = [
        {name: 'Acid reflux'},
        {name: 'Back pain'},
        {name: 'Cramps'},
        {name: 'Headaches'},
        {name: 'Racing heart'},
        {name: 'Tiredness'},
        {name: 'Abdominal cramps'},
        {name: 'Abdominal pain'},
        {name: 'Absence of menstruation'},
        {name: 'Achilles tendon pain'},
    ]

    const moreList = [
        {name: 'Acne'},
        {name: 'Adjustment disorder'},
        {name: 'Age regression'},
        {name: 'Aggression'},
        {name: 'Agitation'},
        {name: 'Allergies'},
        {name: 'Alogia'},
        {name: 'Anal itching'},
        {name: 'Anger'},
        {name: 'Angioedema'},
        {name: 'Ankle pain'},
        {name: 'Anosmia'},
        {name: 'Anxiety'},
        {name: 'Anxious mood'},
        {name: 'Apathy'},
    ]

    const [checked, setChecked] = useState(false);

    const [isSearchCancel, setIsSearchCancel] = useState(false);
    const [isSearchFocus, setIsSearchFocus] = useState(true);

    const Focusfuc = () => {
      setIsSearchCancel(false)
      setIsSearchFocus(true)
    }

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
            {
                isSearchCancel == false ? 
                    <View style={[commonStyles.titleArea, {backgroundColor: theme.header_back_color}]}>
                        <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name={'arrow-back-outline'} size={25} color={'white'} onPress={() => navigation.navigate('Symptom')} />
                        </View>
                        <View style={{width: '70%', height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
                            <TextInput
                                mode='flat'
                                placeholder='Search for medication'
                                placeholderTextColor={'white'}
                                cursorColor='white'
                                textColor='white'
                                selectionColor='white'
                                autoFocus={isSearchFocus}
                                underlineStyle={{display: 'none'}}
                                style={{backgroundColor: theme.header_back_color, color: 'white'}}
                            />
                        </View>
                        <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name={'close'} size={20} color={'white'} onPress={() => {setIsSearchCancel(true), setIsSearchFocus(false)}} />
                        </View>
                    </View>
                :
                    <View style={{width: '100%', backgroundColor: theme.header_back_color}}>
                        <View style={{flexDirection: 'row', height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
                            <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                                <Icon name={'arrow-back-outline'} size={25} color={'white'} onPress={() => navigation.navigate('Symptom')} />
                            </View>
                            <View style={{width: '85%',justifyContent: 'center'}}>
                                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white'}}>
                                    Select medication
                                </Text>
                            </View>
                        </View>
                        <View style={{width: '85%', alignSelf: 'center', justifyContent: 'center'}}>
                            <SearchBar
                                placeholder="Search for medication"
                                value={''}
                                onFocus={() => Focusfuc()}
                                style={{backgroundColor: theme.status_back_color, fontSize: 15, height: 10}}
                                cursorColor={'white'}
                                placeholderTextColor={"white"}
                                containerStyle={{ marginTop: -10, padding: 5, backgroundColor: theme.header_back_color, borderBottomColor: theme.header_back_color, borderTopColor: theme.header_back_color}}
                                inputContainerStyle={{ padding: 0, backgroundColor: theme.status_back_color}}
                                searchIcon={() => <Icon name='search' color={'white'} size={15}/>}
                                clearIcon={() => ""}
                                round={true}
                            />
                        </View>
                    </View>
                }

                <ScrollView>
                    <List.Section>
                        <List.Subheader style={{color: basics.allStyle.common_btn_color}}>Common symptoms</List.Subheader>
                        {
                            commonList.map((item, i) => {
                                return(
                                    <View style={{flexDirection: 'row',  width: '100%', height: 50, marginTop: 10, paddingLeft: 10, paddingRight: 10}}>
                                        <View style={{flex: 0.1, justifyContent: 'center'}}>
                                        <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                                        </View>
                                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                        <List.Subheader style={{color: basics.allStyle.common_btn_color}}>More symptoms</List.Subheader>
                        {
                            moreList.map((item, i) => {
                                return(
                                    <View style={{flexDirection: 'row',  width: '100%', height: 50, marginTop: 10, paddingLeft: 10, paddingRight: 10}}>
                                        <View style={{flex: 0.1, justifyContent: 'center'}}>
                                        <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                                        </View>
                                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </List.Section>
                    <List.Item 
                        title="Add symptom" 
                        style={{paddingTop: 20, paddingBottom: 20}} 
                        left={() => <Icon name={'add-circle-outline'} size={25} style={{marginLeft: 20}} />}
                        onPress={() => Alert.alert("here")}
                    />
                    <Divider bold={true} />
                    
                </ScrollView>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Card style={{backgroundColor: 'white', padding: 15, alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            color={basics.allStyle.common_btn_color}
                            textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                            style={[commonStyles.mediumBtnSize, {marginTop: 20}]}
                            onPress={() => { Alert.alert("save clicked") }}
                        >
                            SAVE
                        </Button>
                    </Card>
                </View>
            </SafeAreaView>
        </>
    )
}


export default SymptomSelect
