console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Metadata"
 , "c2" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConsumerMetadata"
 , "c2" : "ConsumerMetadata(long;long;boolean;boolean;SubscriptionState;LogContext;ClusterResourceListeners)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "allowAutoTopicCreation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MetadataRequest.Builder"
 , "c2" : "newMetadataRequestBuilder()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addTransientTopics(Set<String>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearTransientTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "retainTopic(String;boolean;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#39"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00039] Lock statement on synchronized method newMetadataRequestBuilder"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method addTransientTopics"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method addTransientTopics arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#54"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00054] Lock statement on synchronized method clearTransientTopics"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#59"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00059] Lock statement on synchronized method retainTopic"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method retainTopic arguments String  topic|boolean  isInternal|long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.consumer.internals.ConsumerMetadata.retainTopic@POLYN169139 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.consumer.internals.ConsumerMetadata.retainTopic@POLYN169139 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
