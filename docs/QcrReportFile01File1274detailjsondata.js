console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java 26 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.common.FetchResponseBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.common.FetchResponseBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#65"
 , "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "3"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#95"
 , "c1" : "int"
 , "c2" : "testConstructFetchResponse()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#101"
 , "c1" : "int"
 , "c2" : "testPartitionMapFromData()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#106"
 , "c1" : "int"
 , "c2" : "testSerializeFetchResponse()"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00045] The class FetchResponseBenchmark contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method setup list of called methods Object monObjet|org.apache.kafka.common.record.MemoryRecords MemoryRecords_withRecordsN165417|org.apache.kafka.common.Uuid Uuid_randomUuidN166900|org.apache.kafka.common.requests.FetchResponse FetchResponse_ofN168001"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'key1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'value1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  1001 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'key2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'value2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  1002 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'key3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  'value3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.setup@POLYN165346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00095] For method testConstructFetchResponse list of called methods Object monObjet|org.apache.kafka.common.requests.FetchResponse FetchResponse_ofN168334"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.testConstructFetchResponse@POLYN168259 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.common.FetchResponseBenchmark.testConstructFetchResponse@POLYN168259 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00106] For method testSerializeFetchResponse list of called methods Object monObjet|org.apache.kafka.common.network.Send fetchResponse_toSendN168925"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchResponseBenchmark.java.svg" }

};
console.log('leListeStr 99 main end');
