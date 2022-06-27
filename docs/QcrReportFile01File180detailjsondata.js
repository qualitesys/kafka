console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.ConsumerRecord"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.ConsumerRecord" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConsumerRecord"
 , "c2" : "ConsumerRecord(String;int;long;K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecord"
 , "c2" : "ConsumerRecord(String;int;long;long;TimestampType;int;int;K;V;Headers;Optional<Integer>)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecord"
 , "c2" : "ConsumerRecord(String;int;long;long;TimestampType;long;int;int;K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecord"
 , "c2" : "ConsumerRecord(String;int;long;long;TimestampType;Long;int;int;K;V;Headers)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRecord"
 , "c2" : "ConsumerRecord(String;int;long;long;TimestampType;Long;int;int;K;V;Headers;Optional<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Headers"
 , "c2" : "headers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "key()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "value()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "offset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "timestamp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TimestampType"
 , "c2" : "timestampType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "serializedKeySize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "serializedValueSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Integer>"
 , "c2" : "leaderEpoch()"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.svg" }

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
 , "c4" : "17"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class ConsumerRecord contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.clients.consumer.ConsumerRecord.ConsumerRecord@POLYN205961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.consumer.ConsumerRecord.ConsumerRecord@POLYN205961 the MagicNumber/String  'Topic cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.consumer.ConsumerRecord.ConsumerRecord@POLYN205961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.clients.consumer.ConsumerRecord.ConsumerRecord@POLYN205961 the MagicNumber/String  'Headers cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  'ConsumerRecord(topic = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', partition = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', leaderEpoch = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', offset = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ' = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', serialized key size = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', serialized value size = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', headers = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', key = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ', value = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerRecord.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.consumer.ConsumerRecord.toString@POLYN212454 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
