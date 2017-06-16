import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Tree } from 'react-native-pathjs-charts';

export class TreeChart extends Component {
  render() {
    let data = {
      "name": "Root",
      "children": [{
        "name": "Santa Catarina",
        "children": [{
          "name": "Tromp"
        }, {
          "name": "Thompson"
        }, {
          "name": "Ryan"
        }]
      }, {
        "name": "Acre",
        "children": [{
          "name": "Dicki"
        }, {
          "name": "Armstrong"
        }, {
          "name": "Nitzsche"
        }]
      }]
    }

    let options = {
      margin: {
        top: 20,
        left: 50,
        right: 80,
        bottom: 20
      },
      width: 200,
      height: 200,
      fill: "#2980B9",
      stroke: "#3E90F0",
      r: 2,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }

    return (
      <View>
        <Tree data={data} options={options}  />
        <Text style={{ fontWeight: 'bold', fontSize: 16 , textAlign: 'center'}}>Recipe Ancestry</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    loading: state.loginReducer.loading
  };
};

export default connect(mapStateToProps, null)(TreeChart);
