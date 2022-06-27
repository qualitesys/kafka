console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DescribeProducersResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DescribeProducersResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeProducersResult"
 , "c2" : "DescribeProducersResult(Map<TopicPartition,KafkaFuture<PartitionProducerState>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<PartitionProducerState>"
 , "c2" : "partitionResult(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Map<TopicPartition,PartitionProducerState>>"
 , "c2" : "all()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.svg" }

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
 , "c4" : "7"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class DescribeProducersResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method partitionResult arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.clients.admin.DescribeProducersResult.partitionResult@POLYN165365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.clients.admin.DescribeProducersResult.partitionResult@POLYN165365 the MagicNumber/String  'Topic partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.clients.admin.DescribeProducersResult.partitionResult@POLYN165365 the MagicNumber/String  ' was not included in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.clients.admin.DescribeProducersResult.all@POLYN165844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00048] The class PartitionProducerState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.DescribeProducersResult.PartitionProducerState.toString@POLYN167151 the MagicNumber/String  'PartitionProducerState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.clients.admin.DescribeProducersResult.PartitionProducerState.toString@POLYN167151 the MagicNumber/String  'activeProducers=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeProducersResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.DescribeProducersResult.PartitionProducerState.toString@POLYN167151 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
