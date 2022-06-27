console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java 9 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ThroughputGenerator"
 , "c2" : "org.apache.kafka.trogdor.workload.ConstantThroughputGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ConstantThroughputGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConstantThroughputGenerator"
 , "c2" : "ConstantThroughputGenerator(int;long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "windowSizeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "messagesPerWindow()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "calculateNextWindow()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throttle()"
 , "c3" : "5"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ConstantThroughputGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.ConstantThroughputGenerator@POLYN167081 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.ConstantThroughputGenerator@POLYN167081 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00039] For method calculateNextWindow list of called methods Object monObjet|long Time_SYSTEM_millisecondsN167890"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.calculateNextWindow@POLYN167763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.calculateNextWindow@POLYN167763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#55"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00055] Lock statement on synchronized method throttle"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.throttle@POLYN168261 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConstantThroughputGenerator.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.workload.ConstantThroughputGenerator.throttle@POLYN168261 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
