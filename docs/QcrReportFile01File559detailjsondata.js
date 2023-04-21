console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RecordsSend<T>"
 , "c2" : "org.apache.kafka.common.record.DefaultRecordsSend"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.DefaultRecordsSend" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#24"
 , "c1" : "DefaultRecordsSend"
 , "c2" : "DefaultRecordsSend(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#28"
 , "c1" : "DefaultRecordsSend"
 , "c2" : "DefaultRecordsSend(T;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#33"
 , "c1" : "long"
 , "c2" : "writeTo(TransferableChannel;long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method writeTo arguments TransferableChannel  channel|long  previouslyWritten|int  remaining"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordsSend.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
