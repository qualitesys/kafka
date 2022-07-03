console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java 14 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Suppressed<K>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FinalResultsSuppressionBuilder"
 , "c2" : "FinalResultsSuppressionBuilder(String;Suppressed.StrictBufferConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "SuppressedInternal<K>"
 , "c2" : "buildFinalResultsSuppression(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Suppressed<K>"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class FinalResultsSuppressionBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method buildFinalResultsSuppression arguments Duration  gracePeriod"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.buildFinalResultsSuppression@POLYN168951 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method withName arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00039] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.equals@POLYN169458 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.equals@POLYN169458 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.equals@POLYN169458 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.toString@POLYN170407 the MagicNumber/String  'FinalResultsSuppressionBuilder{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.toString@POLYN170407 the MagicNumber/String  'name='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.toString@POLYN170407 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.toString@POLYN170407 the MagicNumber/String  ', bufferConfig=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/FinalResultsSuppressionBuilder.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.suppress.FinalResultsSuppressionBuilder.toString@POLYN170407 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
