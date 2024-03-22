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

    </ScrollView>
  );
}
