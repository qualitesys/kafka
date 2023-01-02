console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java 24 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.NetworkClientUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.NetworkClientUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#32"
 , "c1" : "NetworkClientUtils"
 , "c2" : "NetworkClientUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#43"
 , "c1" : "boolean"
 , "c2" : "isReady(KafkaClient;Node;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c1" : "boolean"
 , "c2" : "awaitReady(KafkaClient;Node;Time;long)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c1" : "ClientResponse"
 , "c2" : "sendAndReceive(KafkaClient;ClientRequest;Time)"
 , "c3" : "8"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method isReady arguments KafkaClient  client|Node  node|long  currentTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.NetworkClientUtils.isReady@POLYN161055 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method awaitReady arguments KafkaClient  client|Node  node|Time  time|long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00110] For method awaitReady list of called methods Object monObjet|long time_millisecondsN162240|long time_millisecondsN162542|long time_millisecondsN163394"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  'Timeout needs to be greater than 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  'Connection to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  ' failed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NetworkClientUtils.awaitReady@POLYN161907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method sendAndReceive arguments KafkaClient  client|ClientRequest  request|Time  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.clients.NetworkClientUtils.sendAndReceive@POLYN163893 the MagicNumber/String  'Connection to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.clients.NetworkClientUtils.sendAndReceive@POLYN163893 the MagicNumber/String  ' was disconnected before the response was read' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.clients.NetworkClientUtils.sendAndReceive@POLYN163893 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.clients.NetworkClientUtils.sendAndReceive@POLYN163893 the MagicNumber/String  'Client was shutdown before response was read' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.clients.NetworkClientUtils.sendAndReceive@POLYN163893 the MagicNumber/String  'Client was shutdown before response was read' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/NetworkClientUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
