console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java 4 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ControllerRequestContext"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerRequestContext" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#34"
 , "c1" : "OptionalLong"
 , "c2" : "requestTimeoutMsToDeadlineNs(Time;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#45"
 , "c1" : "ControllerRequestContext"
 , "c2" : "ControllerRequestContext(RequestHeaderData;KafkaPrincipal;OptionalLong)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#55"
 , "c1" : "ControllerRequestContext"
 , "c2" : "ControllerRequestContext(AuthorizableRequestContext;OptionalLong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#70"
 , "c1" : "RequestHeaderData"
 , "c2" : "requestHeader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#74"
 , "c1" : "KafkaPrincipal"
 , "c2" : "principal()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#78"
 , "c1" : "OptionalLong"
 , "c2" : "deadlineNs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method requestTimeoutMsToDeadlineNs arguments Time  time|int  millisecondsOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument requestContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00034] Public method requestTimeoutMsToDeadlineNs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerRequestContext.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
