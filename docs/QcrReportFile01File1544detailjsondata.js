console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProductionExceptionHandler"
 , "c2" : "org.apache.kafka.streams.errors.DefaultProductionExceptionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.errors.DefaultProductionExceptionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#10"
 , "c1" : "ProductionExceptionHandlerResponse"
 , "c2" : "handle(ProducerRecord<byte[],byte[]>;Exception)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#16"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class DefaultProductionExceptionHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#10"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00010] For method handle arguments ProducerRecord&lt;byte[] ,byte[] &gt;  record|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00016] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/errors/DefaultProductionExceptionHandler.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00016] Void method configure is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
