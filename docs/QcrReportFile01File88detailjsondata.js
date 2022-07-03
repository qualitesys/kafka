console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeReplicaLogDirsResult"
 , "c2" : "DescribeReplicaLogDirsResult(Map<TopicPartitionReplica,KafkaFuture<ReplicaLogDirInfo>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartitionReplica,KafkaFuture<ReplicaLogDirInfo>>"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Map<TopicPartitionReplica,ReplicaLogDirInfo>>"
 , "c2" : "all()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.svg" }

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
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class DescribeReplicaLogDirsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.all@POLYN176716 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00049] The class ReplicaLogDirInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.ReplicaLogDirInfo@POLYN178030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.ReplicaLogDirInfo@POLYN178030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  '(currentReplicaLogDir=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  ', futureReplicaLogDir=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  ', futureReplicaOffsetLag=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  'ReplicaLogDirInfo(currentReplicaLogDir=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeReplicaLogDirsResult.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult.ReplicaLogDirInfo.toString@POLYN178966 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
