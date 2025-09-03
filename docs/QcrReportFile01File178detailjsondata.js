console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Configurable,AutoCloseable"
 , "c2" : "org.apache.kafka.clients.consumer.ConsumerInterceptor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.ConsumerInterceptor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.html#68"
 , "c1" : "ConsumerRecords&lt;K,V&gt;"
 , "c2" : "onConsume(ConsumerRecords&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.html#77"
 , "c1" : "void"
 , "c2" : "onCommit(Map&lt;TopicPartition,OffsetAndMetadata&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.html#82"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.svg" }

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
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00043] The interface ConsumerInterceptor does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerInterceptor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
