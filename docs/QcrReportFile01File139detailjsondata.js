console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.TransactionDescription"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.TransactionDescription" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TransactionDescription"
 , "c2" : "TransactionDescription(int;TransactionState;long;int;long;OptionalLong;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "coordinatorId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TransactionState"
 , "c2" : "state()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "producerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "producerEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "transactionTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "transactionStartTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "topicPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class TransactionDescription contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00070] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.clients.admin.TransactionDescription.equals@POLYN172945 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.TransactionDescription.equals@POLYN172945 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.TransactionDescription.equals@POLYN172945 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  'TransactionDescription(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  'coordinatorId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', state=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', producerId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', producerEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', transactionTimeoutMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', transactionStartTimeMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ', topicPartitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/TransactionDescription.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.admin.TransactionDescription.toString@POLYN174090 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
