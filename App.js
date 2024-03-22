import React, { useState } from 'react';
import { ScrollView, View, Text, StatusBar, TextInput, Pressable } from 'react-native';
import Grafico from './src/components/Grafico';
import Janela from './src/components/Janela';

export default function App() {
  const [ limite, definirLimite ] = useState(1000);
  const [ gastos, definirGastos ] = useState([]);

  const [ categoria, mudarCategoria ] = useState("");
  const [ valor, mudarValor ] = useState(0);

  function AdicionarGastos() {
    const novoGasto = { categoria, valor };
    definirGastos([ ...gastos, novoGasto ]);
  }

  function TotalGastos() {
    var total = 0;
    for (var gasto of gastos)
      total += parseFloat( gasto.valor );
    return total
  }

  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

      <Grafico porcentagem={ (TotalGastos() / limite ) * 100}/>

      <Janela>
        <Text style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}> 
          Definir Limites 
        </Text>

        <TextInput
          style={{ backgroundColor: "#fff", padding: 8 }}
          value={ limite.toString() }
          onChangeText={ definirLimite }
          placeholder="Limite (R$)"
          keyboardType="number-pad"
        />
      </Janela>

      <Janela>
        <Text style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}> 
          Adicionar Gastos 
        </Text>

        <TextInput
          style={{ backgroundColor: "#fff", marginBottom: 16, padding: 8 }}
          value={ categoria }
          onChangeText={ mudarCategoria }
          placeholder="Gasto"
          keyboardType="default"
        />

        <TextInput
          style={{ backgroundColor: "#fff", marginBottom: 16, padding: 8 }}
          value={ valor.toString() }
          onChangeText={ mudarValor }
          placeholder="Valor (R$)"
          keyboardType="number-pad"
        />

        <Pressable onPress={ AdicionarGastos }>
          <View style={{ backgroundColor: "#698269" }}>
            <Text style={{ color: "#fff", paddingVertical: 16, textAlign: "center" }}> 
              Adicionar 
            </Text>
          </View>
        </Pressable>
      </Janela>

      <Janela>
        <Text style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}>
          Histórico de Gastos
        </Text>

        {
          gastos.map(function(gasto, indice) {
            return <Text key={ indice } style={{ color: "#698269" }}> 
              {gasto.categoria} - R$ {gasto.valor}
            </Text>
          })
        }
      </Janela>

    </ScrollView>
  );
}
