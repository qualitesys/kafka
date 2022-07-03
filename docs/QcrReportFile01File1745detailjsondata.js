console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java 21 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProcessorParameters"
 , "c2" : "ProcessorParameters(org.apache.kafka.streams.processor.ProcessorSupplier<KIn,VIn>;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorParameters"
 , "c2" : "ProcessorParameters(ProcessorSupplier<KIn,VIn,KOut,VOut>;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorParameters"
 , "c2" : "ProcessorParameters(FixedKeyProcessorSupplier<KIn,VIn,VOut>;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorSupplier<KIn,VIn,KOut,VOut>"
 , "c2" : "processorSupplier()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FixedKeyProcessorSupplier<KIn,VIn,VOut>"
 , "c2" : "fixedKeyProcessorSupplier()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addProcessorTo(InternalTopologyBuilder;String[])"
 , "c3" : "9"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "KTableSource<KIn,VIn>"
 , "c2" : "kTableSourceSupplier()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTableKTableJoinMerger<KIn,VIn>"
 , "c2" : "kTableKTableJoinMergerProcessorSupplier()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "processorName()"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.svg" }

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
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ProcessorParameters contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument processorSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.ProcessorParameters@POLYN181331 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.ProcessorParameters@POLYN181825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.ProcessorParameters@POLYN181825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.ProcessorParameters@POLYN182225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.ProcessorParameters@POLYN182225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method addProcessorTo arguments InternalTopologyBuilder  topologyBuilder|String[]  parentNodeNames"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.addProcessorTo@POLYN182906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.kTableSourceSupplier@POLYN184431 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.toString@POLYN185262 the MagicNumber/String  'ProcessorParameters{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.toString@POLYN185262 the MagicNumber/String  'processor class=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.toString@POLYN185262 the MagicNumber/String  ', processor name='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.toString@POLYN185262 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorParameters.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters.toString@POLYN185262 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
