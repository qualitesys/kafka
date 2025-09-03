console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ProductionExceptionHandler"
 , "c2" : "org.apache.kafka.streams.errors.DefaultProductionExceptionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.errors.DefaultProductionExceptionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#28"
 , "c1" : "ProductionExceptionHandlerResponse"
 , "c2" : "handle(ProducerRecord&lt;byte[],byte[]&gt;;Exception)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#34"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method handle arguments ProducerRecord&lt;byte[] ,byte[] &gt;  record|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00034] Valued method configure is empty or contains only a return. Interface segregation for ProductionExceptionHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00034] In the class DefaultProductionExceptionHandler which implements the interface(s) ProductionExceptionHandler, the method configure is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedProductionExceptionHandler"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
