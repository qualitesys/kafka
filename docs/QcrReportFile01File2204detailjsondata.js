console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java 39 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.workload.Histogram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.Histogram" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Histogram"
 , "c2" : "Histogram(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "add(int)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "add(long)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Summary"
 , "c2" : "summarize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Summary"
 , "c2" : "summarize(float[])"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "List<PercentileSummary>"
 , "c2" : "summarizePercentiles(int[];float[];long)"
 , "c3" : "7"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class Histogram contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.trogdor.workload.Histogram.Histogram@POLYN182429 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method add arguments int  value"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#30"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00030] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.trogdor.workload.Histogram.add@POLYN182777 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.trogdor.workload.Histogram.add@POLYN182777 the MagicNumber/String  'invalid negative value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.trogdor.workload.Histogram.add@POLYN182777 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.trogdor.workload.Histogram.add@POLYN182777 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method add arguments long  value"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00049] The class Summary contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00079] The class PercentileSummary contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN185846 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method summarize arguments float[]  percentiles"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00104] For method summarize list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.trogdor.workload.Histogram.PercentileSummary&gt; summarizePercentilesN187937"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#106"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00106] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  'Invalid percentiles fraction array.  Bad element ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  '.  The array must be sorted and non-negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  1.0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  'Invalid percentiles fraction array.  Bad element ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  '.  Elements must be less than or equal to 1.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.trogdor.workload.Histogram.summarize@POLYN186001 the MagicNumber/String  0.0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method summarizePercentiles arguments int[]  countsCopy|float[]  percentiles|long  numSamples"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.Histogram.summarizePercentiles@POLYN188181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00100] Public method summarize is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/Histogram.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method add is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
