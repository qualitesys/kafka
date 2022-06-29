console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java 28 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.ConsumerPartitionAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.ConsumerPartitionAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "subscriptionUserData(Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GroupAssignment"
 , "c2" : "assign(Cluster;GroupSubscription)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onAssignment(Assignment;ConsumerGroupMetadata)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "List<RebalanceProtocol>"
 , "c2" : "supportedProtocols()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "version()"
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
   "c1" : "List<ConsumerPartitionAssignor>"
 , "c2" : "getAssignorInstances(List<String>;Map<String,Object>)"
 , "c3" : "10"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "23"
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
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00046] The class Subscription contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.Subscription@POLYN210362 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method setGroupInstanceId arguments Optional&lt;String &gt;  groupInstanceId"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  'Subscription(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  'topics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  ', userDataSize=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  ', ownedPartitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  ', groupInstanceId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Subscription.toString@POLYN211146 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00098] The class Assignment contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.Assignment@POLYN212107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  'Assignment(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  'partitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  ', userDataSize=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment.toString@POLYN212487 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00128] The class GroupSubscription contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupSubscription.toString@POLYN213298 the MagicNumber/String  'GroupSubscription(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupSubscription.toString@POLYN213298 the MagicNumber/String  'subscriptions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupSubscription.toString@POLYN213298 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00147] The class GroupAssignment contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupAssignment.toString@POLYN213873 the MagicNumber/String  'GroupAssignment(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupAssignment.toString@POLYN213873 the MagicNumber/String  'assignments=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerPartitionAssignor.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupAssignment.toString@POLYN213873 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
