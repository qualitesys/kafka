console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Iterator<byte[]>"
 , "c2" : "org.apache.kafka.trogdor.workload.PayloadIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.PayloadIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#29"
 , "c1" : "PayloadIterator"
 , "c2" : "PayloadIterator(PayloadGenerator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#34"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#39"
 , "c1" : "byte[]"
 , "c2" : "next()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#44"
 , "c1" : "void"
 , "c2" : "remove()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#48"
 , "c1" : "void"
 , "c2" : "seek(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#52"
 , "c1" : "long"
 , "c2" : "position()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.trogdor.workload.PayloadIterator.hasNext@POLYN155063 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#39"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00039] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method seek"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method seek arguments long  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#52"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00052] Lock statement on synchronized method position"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
