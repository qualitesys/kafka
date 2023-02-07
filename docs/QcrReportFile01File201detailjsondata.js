console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.internals.AsyncClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.AsyncClient" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#31"
 , "c1" : "AsyncClient"
 , "c2" : "AsyncClient(ConsumerNetworkClient;LogContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#36"
 , "c1" : "RequestFuture&lt;T2&gt;"
 , "c2" : "sendAsyncRequest(Node;T1)"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#68"
 , "c1" : "Logger"
 , "c2" : "logger()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#72"
 , "c1" : "AbstractRequest.Builder&lt;Req&gt;"
 , "c2" : "prepareRequest(Node;T1)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#74"
 , "c1" : "T2"
 , "c2" : "handleResponse(Node;T1;Resp)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method sendAsyncRequest arguments Node  node|T1  requestData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.clients.consumer.internals.AsyncClient.sendAsyncRequest@POLYN151152 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.consumer.internals.AsyncClient.sendAsyncRequest@POLYN151152 the MagicNumber/String  'Could not cast response body' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.consumer.internals.AsyncClient.sendAsyncRequest@POLYN151152 the MagicNumber/String  'Received {} {} from broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method prepareRequest arguments Node  node|T1  requestData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method handleResponse arguments Node  node|T1  requestData|Resp  response"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AsyncClient.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
