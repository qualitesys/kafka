console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java 67 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KeyValueStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "InMemoryKeyValueStore"
 , "c2" : "InMemoryKeyValueStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "persistent()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOpen()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Position"
 , "c2" : "getPosition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "get(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "putIfAbsent(Bytes;byte[])"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putInternal(Bytes;byte[])"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAll(List<KeyValue<Bytes,byte[]>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "delete(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "range(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "reverseRange(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "range(Bytes;Bytes;boolean)"
 , "c3" : "9"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "getKeyValueIterator(Set<Bytes>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "reverseAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "approximateNumEntries()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this" }
,
{ "ligne" :  "R1:org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN182688.entries" }
,
{ "ligne" :  "R2:org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604.key" }
,
{ "ligne" :  "R3:org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604.value" }
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class InMemoryKeyValueStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.init@POLYN179491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.init@POLYN179491 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.init@POLYN179491 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.persistent@POLYN180745 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#120"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00120] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method get arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#125"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00125] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method put arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#130"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00130] Lock statement on synchronized method putIfAbsent"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method putIfAbsent arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00130] For method putIfAbsent list of called methods Object monObjet|byte[] getN181967"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putIfAbsent@POLYN181822 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method putInternal arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized method putAll"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method putAll arguments List&lt;KeyValue&lt;Bytes ,byte[] &gt; &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument prefixKeySerializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#169"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00169] Lock statement on synchronized method delete"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method delete arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#174"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00174] Lock statement on synchronized method range"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method range arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#179"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00179] Lock statement on synchronized method reverseRange"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method reverseRange arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.reverseRange@POLYN184343 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method range arguments Bytes  from|Bytes  to|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  'This may be due to range arguments set in the wrong order, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  'or serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.range@POLYN184602 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method getKeyValueIterator arguments Set&lt;Bytes &gt;  rangeSet|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#206"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00206] Lock statement on synchronized method all"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.all@POLYN186387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.all@POLYN186387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#211"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00211] Lock statement on synchronized method reverseAll"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.reverseAll@POLYN186592 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.close@POLYN187011 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00233] The class InMemoryKeyValueIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.InMemoryKeyValueIterator.peekNextKey@POLYN188291 the MagicNumber/String  'peekNextKey() not supported in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00256] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00256] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00223] Void method flush is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00223] Void method flush is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217 ending with method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604 ending with method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181604"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemoryKeyValueStore.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putInternal@POLYN182217 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
