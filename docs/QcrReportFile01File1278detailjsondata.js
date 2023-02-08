console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java 3 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.common.TopicBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.common.TopicBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#48"
 , "c1" : "BenchState"
 , "c2" : "testValidate(BenchState)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
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
 , "c1" : "00044"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00044] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method testValidate arguments BenchState  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
