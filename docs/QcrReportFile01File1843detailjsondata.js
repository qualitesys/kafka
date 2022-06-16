console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java 12 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class PunctuationQueue contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method schedule arguments PunctuationSchedule  sched"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument sched is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#15"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00015] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#22"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00022] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method mayPunctuate arguments long  timestamp|PunctuationType  type|ProcessorNodePunctuator  processorNodePunctuator"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument processorNodePunctuator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#29"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00029] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.processor.internals.PunctuationQueue.mayPunctuate@POLYN159390 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.processor.internals.PunctuationQueue.mayPunctuate@POLYN159390 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PunctuationQueue.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.processor.internals.PunctuationQueue.mayPunctuate@POLYN159390 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
