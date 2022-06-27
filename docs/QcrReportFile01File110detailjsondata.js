console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.ListOffsetsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.ListOffsetsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ListOffsetsResult"
 , "c2" : "ListOffsetsResult(Map<TopicPartition,KafkaFuture<ListOffsetsResultInfo>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<ListOffsetsResultInfo>"
 , "c2" : "partitionResult(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Map<TopicPartition,ListOffsetsResultInfo>>"
 , "c2" : "all()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ListOffsetsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method partitionResult arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.clients.admin.ListOffsetsResult.partitionResult@POLYN169517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.clients.admin.ListOffsetsResult.partitionResult@POLYN169517 the MagicNumber/String  'List Offsets for partition \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.clients.admin.ListOffsetsResult.partitionResult@POLYN169517 the MagicNumber/String  '\' was not attempted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.admin.ListOffsetsResult.all@POLYN170073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00053] The class ListOffsetsResultInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.ListOffsetsResult.ListOffsetsResultInfo.toString@POLYN172034 the MagicNumber/String  'ListOffsetsResultInfo(offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.ListOffsetsResult.ListOffsetsResultInfo.toString@POLYN172034 the MagicNumber/String  ', timestamp=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.ListOffsetsResult.ListOffsetsResultInfo.toString@POLYN172034 the MagicNumber/String  ', leaderEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/ListOffsetsResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.ListOffsetsResult.ListOffsetsResultInfo.toString@POLYN172034 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
