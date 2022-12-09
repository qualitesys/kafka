console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java 5 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Iterator<byte[]>"
 , "c2" : "org.apache.kafka.trogdor.workload.PayloadIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.PayloadIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#12"
 , "c1" : "PayloadIterator"
 , "c2" : "PayloadIterator(PayloadGenerator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#17"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#22"
 , "c1" : "byte[]"
 , "c2" : "next()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#27"
 , "c1" : "void"
 , "c2" : "remove()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#31"
 , "c1" : "void"
 , "c2" : "seek(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#35"
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
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.svg" }

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
 , "c1" : "00018"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.trogdor.workload.PayloadIterator.hasNext@POLYN143505 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#22"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00022] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#31"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00031] Lock statement on synchronized method seek"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method seek arguments long  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.html#35"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00035] Lock statement on synchronized method position"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/PayloadIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
