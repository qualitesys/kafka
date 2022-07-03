console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.FenceProducersResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.FenceProducersResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FenceProducersResult"
 , "c2" : "FenceProducersResult(Map<CoordinatorKey,KafkaFuture<ProducerIdAndEpoch>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,KafkaFuture<Void>>"
 , "c2" : "fencedProducers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Long>"
 , "c2" : "producerId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Short>"
 , "c2" : "epochId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class FenceProducersResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.clients.admin.FenceProducersResult.fencedProducers@POLYN173293 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method producerId arguments String  transactionalId"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method epochId arguments String  transactionalId"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.admin.FenceProducersResult.all@POLYN174356 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  'TransactionalId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.clients.admin.FenceProducersResult the MagicNumber/String  '` was not included in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00033] Public method producerId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FenceProducersResult.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00038] Public method epochId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
