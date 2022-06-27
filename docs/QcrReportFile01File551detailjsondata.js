console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java 20 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.CompressionRatioEstimator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.CompressionRatioEstimator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "float"
 , "c2" : "updateEstimation(String;CompressionType;float)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "float"
 , "c2" : "estimation(String;CompressionType)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetEstimation(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeEstimation(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setEstimation(String;CompressionType;float)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "float[]"
 , "c2" : "getAndCreateEstimationIfAbsent(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "float[]"
 , "c2" : "initialCompressionRatio()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.svg" }

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
 , "c4" : "3"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class CompressionRatioEstimator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method updateEstimation arguments String  topic|CompressionType  type|float  observedRatio"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00018] For method updateEstimation list of called methods Object monObjet|float[] getAndCreateEstimationIfAbsentN170875"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#21"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00021] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method estimation arguments String  topic|CompressionType  type"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00032] For method estimation list of called methods Object monObjet|float[] getAndCreateEstimationIfAbsentN171813"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method resetEstimation arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00038] For method resetEstimation list of called methods Object monObjet|float[] getAndCreateEstimationIfAbsentN172102"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#40"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00040] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method removeEstimation arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method setEstimation arguments String  topic|CompressionType  type|float  ratio"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00053] For method setEstimation list of called methods Object monObjet|float[] getAndCreateEstimationIfAbsentN172819"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#55"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00055] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method getAndCreateEstimationIfAbsent arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00060] For method getAndCreateEstimationIfAbsent list of called methods Object monObjet|float[] initialCompressionRatioN173302"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.record.CompressionRatioEstimator.getAndCreateEstimationIfAbsent@POLYN173033 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/CompressionRatioEstimator.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.record.CompressionRatioEstimator.getAndCreateEstimationIfAbsent@POLYN173033 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
