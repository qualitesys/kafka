console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java 45 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.server.CheckpointBench"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.server.CheckpointBench" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "4"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "tearDown()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "measureCheckpointHighWatermarks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "measureCheckpointLogStartOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.svg" }

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
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "40"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00055] The class CheckpointBench contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00058] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00061] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  'scheduler-thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  9092 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0.9d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  15 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  'MD5' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.jmh.server.CheckpointBench.setup@POLYN186891 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/server/CheckpointBench.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.jmh.server.CheckpointBench.tearDown@POLYN191554 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
