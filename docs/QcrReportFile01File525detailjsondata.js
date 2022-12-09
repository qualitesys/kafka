console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java 4 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.protocol.MessageSizeAccumulator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.protocol.MessageSizeAccumulator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#10"
 , "c1" : "int"
 , "c2" : "totalSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#15"
 , "c1" : "int"
 , "c2" : "sizeExcludingZeroCopy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#20"
 , "c1" : "int"
 , "c2" : "zeroCopySize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#24"
 , "c1" : "void"
 , "c2" : "addZeroCopyBytes(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#29"
 , "c1" : "void"
 , "c2" : "addBytes(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#33"
 , "c1" : "void"
 , "c2" : "add(MessageSizeAccumulator)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method addZeroCopyBytes arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method addBytes arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method add arguments MessageSizeAccumulator  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument size is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/MessageSizeAccumulator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
