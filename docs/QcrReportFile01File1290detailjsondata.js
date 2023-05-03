console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BaseRecordBatchBenchmark"
 , "c2" : "org.apache.kafka.jmh.record.RecordBatchIterationBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.record.RecordBatchIterationBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#45"
 , "c1" : "CompressionType"
 , "c2" : "compressionType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#50"
 , "c1" : "void"
 , "c2" : "measureIteratorForBatchWithSingleMessage(Blackhole)"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#62"
 , "c1" : "void"
 , "c2" : "measureStreamingIteratorForVariableBatchSize(Blackhole)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#76"
 , "c1" : "void"
 , "c2" : "measureSkipIteratorForVariableBatchSize(Blackhole)"
 , "c3" : "4"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
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
 , "c1" : "00050"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method measureIteratorForBatchWithSingleMessage arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method measureStreamingIteratorForVariableBatchSize arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.jmh.record.RecordBatchIterationBenchmark.measureStreamingIteratorForVariableBatchSize@POLYN156218 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method measureSkipIteratorForVariableBatchSize arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.jmh.record.RecordBatchIterationBenchmark.measureSkipIteratorForVariableBatchSize@POLYN157058 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
