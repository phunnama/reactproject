import { StyleSheet, Text, View , Button , SafeAreaView , Modal } from 'react-native'
import React,{useState} from 'react'

const ModalExample = () => {
    const[showModal,setShowModal] = useState(false)
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={()=>alert('Modal has been closed')}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}>Modal is open!</Text>
                    <Button
                    title='Click to cloes Modal'
                    onPress={()=>setShowModal(!showModal)}/>
                </View>

            </Modal>
            {/* Updateing the sate to make modal visible */}
            <Button
            title='Click to open Modal'
            onPress={()=>setShowModal(!showModal)}/>
        </View>
    </SafeAreaView>
  )
}

export default ModalExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop: 30,
        },
        modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
        },
        text: {
        color: 'white',
        marginTop: 10,
        fontSize:20,
        padding:10
        },
})