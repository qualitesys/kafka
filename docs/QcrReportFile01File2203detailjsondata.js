console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java 15 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "PayloadGenerator"
 , "c2" : "org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "GaussianTimestampRandomPayloadGenerator"
 , "c2" : "GaussianTimestampRandomPayloadGenerator(int;double;int;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "messageSizeAverage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "messageSizeDeviation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "messagesUntilSizeChange()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "seed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "generate(long)"
 , "c3" : "2"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
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
   "c1" : "00015"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class GaussianTimestampRandomPayloadGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#61"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00061] Lock statement on synchronized method generate"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method generate arguments long  position"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.GaussianTimestampRandomPayloadGenerator@POLYN176027"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/GaussianTimestampRandomPayloadGenerator.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.generate@POLYN177214 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
