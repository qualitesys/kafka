console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java 13 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "PayloadGenerator"
 , "c2" : "org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimestampConstantPayloadGenerator"
 , "c2" : "TimestampConstantPayloadGenerator(int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "generate(long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.svg" }

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
 , "c4" : "4"
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
 , "c4" : "4"
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
   "c1" : "00013"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class TimestampConstantPayloadGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.TimestampConstantPayloadGenerator@POLYN167858 the MagicNumber/String  'The size of the payload must be greater than or equal to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.TimestampConstantPayloadGenerator@POLYN167858 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#33"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00033] Lock statement on synchronized method generate"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method generate arguments long  position"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.generate@POLYN168552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.generate@POLYN168552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.generate@POLYN168552"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.TimestampConstantPayloadGenerator@POLYN167858"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.generate@POLYN168552 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.generate@POLYN168552 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.TimestampConstantPayloadGenerator@POLYN167858 the MagicNumber/String '.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TimestampConstantPayloadGenerator.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.TimestampConstantPayloadGenerator@POLYN167858 the MagicNumber/String 'The size of the payload must be greater than or equal to ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
