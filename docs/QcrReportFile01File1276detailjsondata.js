console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java 5 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class TopicBenchmark contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00027] The class BenchState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00029] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method testValidate arguments BenchState  state"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/TopicBenchmark.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
