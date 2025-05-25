export function Badge({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <p className="text-xs border border-slate-400 bg-slate-600 text-white w-fit px-3 py-0.5 rounded-full flex gap-1">
      {Icon && <Icon className="size-3 my-auto" />}
      {children}
    </p>
  );
}

export function BadgeGroup({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs border border-slate-400 bg-slate-600 text-white w-fit px-3 py-0.5 rounded-full flex gap-1">
      {children}
    </p>
  );
}

export function BadgeItem({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <>
      {Icon && <Icon className="size-3 my-auto" />}
      {children}
    </>
  );
}
