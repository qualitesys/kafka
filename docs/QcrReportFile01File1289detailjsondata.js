console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java 15 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.xml" 
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
 , "c1" : "CompressionType"
 , "c2" : "compressionType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "measureIteratorForBatchWithSingleMessage(Blackhole)"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "measureStreamingIteratorForVariableBatchSize(Blackhole)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.svg" }

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
 , "c1" : "00035"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method measureIteratorForBatchWithSingleMessage arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method measureStreamingIteratorForVariableBatchSize arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.jmh.record.RecordBatchIterationBenchmark.measureStreamingIteratorForVariableBatchSize@POLYN154848 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method measureSkipIteratorForVariableBatchSize arguments Blackhole  bh"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument bh is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00064"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/record/RecordBatchIterationBenchmark.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.jmh.record.RecordBatchIterationBenchmark.measureSkipIteratorForVariableBatchSize@POLYN155688 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
