console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java 19 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ChannelBuilder"
 , "c2" : "org.apache.kafka.common.network.PlaintextChannelBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.PlaintextChannelBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#46"
 , "c1" : "PlaintextChannelBuilder"
 , "c2" : "PlaintextChannelBuilder(ListenerName)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#50"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#55"
 , "c1" : "KafkaChannel"
 , "c2" : "buildChannel(String;SelectionKey;int;MemoryPool;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#69"
 , "c1" : "KafkaChannel"
 , "c2" : "buildChannel(String;TransportLayer;Supplier&lt;Authenticator&gt;;int;MemoryPool;ChannelMetadataRegistry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#74"
 , "c1" : "PlaintextTransportLayer"
 , "c2" : "buildTransportLayer(SelectionKey)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#79"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method buildChannel arguments String  id|SelectionKey  key|int  maxReceiveSize|MemoryPool  memoryPool|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.network.PlaintextChannelBuilder.buildChannel@POLYN166807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.network.PlaintextChannelBuilder.buildChannel@POLYN166807 the MagicNumber/String  'Failed to create channel due to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method buildChannel arguments String  id|TransportLayer  transportLayer|Supplier&lt;Authenticator &gt;  authenticatorCreator|int  maxReceiveSize|MemoryPool  memoryPool|ChannelMetadataRegistry  metadataRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method buildTransportLayer arguments SelectionKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.PlaintextAuthenticator@POLYN168540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.PlaintextAuthenticator@POLYN168540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.principal@POLYN169040 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.principal@POLYN169040 the MagicNumber/String  'Unexpected call to principal() when listenerName is null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.complete@POLYN169766 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.network.PlaintextChannelBuilder.PlaintextAuthenticator.close@POLYN169860 the MagicNumber/String  'principal builder' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00093] Void method authenticate is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00093] Void method authenticate is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00079] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00079] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.network.PlaintextChannelBuilder.buildChannel@POLYN166807"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.network.PlaintextChannelBuilder.buildChannel@POLYN166807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.common.network.PlaintextChannelBuilder.buildChannel@POLYN166807 the MagicNumber/String 'Failed to create channel due to ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/network/PlaintextChannelBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
