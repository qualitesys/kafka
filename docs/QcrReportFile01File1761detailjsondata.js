console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java 24 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KTableProcessorSupplier<K,V,K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#33"
 , "c1" : "KTableSuppressProcessorSupplier"
 , "c2" : "KTableSuppressProcessorSupplier(SuppressedInternal<K>;String;KTableImpl<K,?,V>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#44"
 , "c1" : "Processor<K,Change<V>,K,Change<V>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#49"
 , "c1" : "KTableValueGetterSupplier<K,V>"
 , "c2" : "view()"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#97"
 , "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.svg" }

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
 , "c4" : "7"
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
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00027] The class KTableSuppressProcessorSupplier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument parentKTable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessorSupplier@POLYN176332 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN177127 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN177127 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN177127 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN177127 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument suppress is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method init arguments ProcessorContext&lt;K ,Change&lt;V &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method process arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method buffer arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#148"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00148] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN182624 the MagicNumber/String  '%s buffer exceeded its max capacity. Currently [%d/%d] records and [%d/%d] bytes.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN182624 the MagicNumber/String  'The bufferFullStrategy [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN182624 the MagicNumber/String  '] is not implemented. This is a bug in Kafka Streams.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method emit arguments TimeOrderedKeyValueBuffer.Eviction&lt;K ,V &gt;  toEmit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#185"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00185] The argument toEmit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.emit@POLYN183909 the MagicNumber/String  1.0d should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method shouldForward arguments Change&lt;V &gt;  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#200"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00200] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.shouldForward@POLYN184773 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
