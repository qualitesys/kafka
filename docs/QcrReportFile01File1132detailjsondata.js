console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java 2 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.isolation.PluginScanResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.isolation.PluginScanResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "PluginScanResult"
 , "c2" : "PluginScanResult(Collection<PluginDesc<SinkConnector>>;Collection<PluginDesc<SourceConnector>>;Collection<PluginDesc<Converter>>;Collection<PluginDesc<HeaderConverter>>;Collection<PluginDesc<Transformation<?>>>;Collection<PluginDesc<Predicate<?>>>;Collection<PluginDesc<ConfigProvider>>;Collection<PluginDesc<ConnectRestExtension>>;Collection<PluginDesc<ConnectorClientConfigOverridePolicy>>)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<SinkConnector>>"
 , "c2" : "sinkConnectors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<SourceConnector>>"
 , "c2" : "sourceConnectors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<Converter>>"
 , "c2" : "converters()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<HeaderConverter>>"
 , "c2" : "headerConverters()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<Transformation<?>>>"
 , "c2" : "transformations()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<Predicate<?>>>"
 , "c2" : "predicates()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<ConfigProvider>>"
 , "c2" : "configProviders()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<ConnectRestExtension>>"
 , "c2" : "restExtensions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<PluginDesc<ConnectorClientConfigOverridePolicy>>"
 , "c2" : "connectorClientConfigPolicies()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class PluginScanResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginScanResult.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.runtime.isolation.PluginScanResult.isEmpty@POLYN159187 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
