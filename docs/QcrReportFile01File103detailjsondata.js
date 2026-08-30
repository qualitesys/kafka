console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.FenceProducersResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.FenceProducersResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#39"
 , "c1" : "FenceProducersResult"
 , "c2" : "FenceProducersResult(Map&lt;CoordinatorKey,KafkaFuture&lt;ProducerIdAndEpoch&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#47"
 , "c1" : "Map&lt;String,KafkaFuture&lt;Void&gt;&gt;"
 , "c2" : "fencedProducers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#57"
 , "c1" : "KafkaFuture&lt;Long&gt;"
 , "c2" : "producerId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#64"
 , "c1" : "KafkaFuture&lt;Short&gt;"
 , "c2" : "epochId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#71"
 , "c1" : "KafkaFuture&lt;Void&gt;"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.admin.FenceProducersResult.fencedProducers@POLYN154645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method producerId arguments String  transactionalId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method epochId arguments String  transactionalId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.admin.FenceProducersResult.all@POLYN155708 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  'TransactionalId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  '  was not included in the request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method producerId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00064] Public method epochId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
