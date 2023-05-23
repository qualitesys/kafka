console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#35"
 , "c1" : "ConsumerMetadata"
 , "c2" : "ConsumerMetadata(long;long;boolean;boolean;SubscriptionState;LogContext;ClusterResourceListeners)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#49"
 , "c1" : "boolean"
 , "c2" : "allowAutoTopicCreation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#54"
 , "c1" : "MetadataRequest.Builder"
 , "c2" : "newMetadataRequestBuilder()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#63"
 , "c1" : "void"
 , "c2" : "addTransientTopics(Set&lt;String&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#69"
 , "c1" : "void"
 , "c2" : "clearTransientTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#74"
 , "c1" : "boolean"
 , "c2" : "retainTopic(String;boolean;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#54"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00054] Lock statement on synchronized method newMetadataRequestBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#63"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00063] Lock statement on synchronized method addTransientTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method addTransientTopics arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#69"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00069] Lock statement on synchronized method clearTransientTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#74"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00074] Lock statement on synchronized method retainTopic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method retainTopic arguments String  topic|boolean  isInternal|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.consumer.internals.ConsumerMetadata.retainTopic@POLYN157743 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.ConsumerMetadata.retainTopic@POLYN157743 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetadata.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
