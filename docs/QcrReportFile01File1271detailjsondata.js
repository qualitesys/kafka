console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java 40 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.common.FetchRequestBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.common.FetchRequestBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "3"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "testFetchRequestFromBuffer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "testFetchRequestForConsumer()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "testFetchRequestForReplica()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "testSerializeFetchRequestForConsumer()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "testSerializeFetchRequestForReplica()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "testRequestToJson()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.svg" }

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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class FetchRequestBenchmark contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00061] For method setup list of called methods Object monObjet|org.apache.kafka.common.Uuid Uuid_randomUuidN184294|org.apache.kafka.common.Uuid Uuid_randomUuidN184389"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  4096 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  'jmh-benchmark' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.testFetchRequestForConsumer@POLYN186221 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.testFetchRequestForConsumer@POLYN186221 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.testFetchRequestForReplica@POLYN186647 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.testFetchRequestForReplica@POLYN186647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.jmh.common.FetchRequestBenchmark.testFetchRequestForReplica@POLYN186647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00105] For method testSerializeFetchRequestForConsumer list of called methods Object monObjet|org.apache.kafka.common.network.Send consumerRequest_toSendN187184"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00113] For method testSerializeFetchRequestForReplica list of called methods Object monObjet|org.apache.kafka.common.network.Send replicaRequest_toSendN187614"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.jmh.common.FetchRequestBenchmark.testSerializeFetchRequestForConsumer@POLYN187097"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.jmh.common.FetchRequestBenchmark.testSerializeFetchRequestForReplica@POLYN187527"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 4096 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 'jmh-benchmark' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 100 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/common/FetchRequestBenchmark.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.jmh.common.FetchRequestBenchmark.setup@POLYN183876 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
